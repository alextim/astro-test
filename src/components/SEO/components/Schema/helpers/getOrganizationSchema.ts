import utils from '@alextim/utils';

const weekDays: Record<string, string> = {
  mo: 'Monday',
  tu: 'Tuesday',
  we: 'Wednesday',
  th: 'Thursday',
  fr: 'Friday',
  sa: 'Saturday',
  su: 'Sunday',
} as const;

const trim = (el: string) => el.trim();

const validateDow = (d: string): string => {
  if (!weekDays[d]) {
    throw new Error(`Not valid Day of Week ${d}`);
  }
  return weekDays[d]!;
};

const parseDow = (s: string): string | string[] | null => {
  if (!s) {
    return null;
  }

  // check for interval
  let dow = s.split('-').map(trim);
  if (dow.length > 1) {
    const [d1, d2] = dow;

    const result: string[] = [];
    let first = false;
    let last = false;
    Object.keys(weekDays).forEach((d) => {
      if (d === d1) {
        first = true;
        result.push(validateDow(d));
      } else if (d === d2) {
        last = true;
        result.push(validateDow(d));
      } else if (first && !last) {
        result.push(validateDow(d));
      }
    });
    return result;
  }

  // check for list
  dow = s.split(',').map(trim);
  if (dow.length > 1) {
    return dow.map((d) => validateDow(d));
  }

  // one day only
  return validateDow(s.trim());
};

const getOpeningHoursSpecification = (openingHours: OpeningHours) =>
  openingHours.map(([dow, timeStart, timeFinish]) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: parseDow(dow),
    opens: timeStart,
    closes: timeFinish,
  }));

export interface OrganizationSchemaParams {
  contacts: Contacts;
  address: Address;
  socialLinks?: SocialLinks;

  siteUrl: string;
  siteLogo: string;
  siteBusinessPhoto?: string | string[];
}

const getOrganizationSchema = ({
  contacts,
  address,
  socialLinks,

  siteUrl,
  siteLogo,
  siteBusinessPhoto,
}: OrganizationSchemaParams) => {
  const {
    organizationType,
    geo,
    openingHours,
    phones: organizationPhone,
    emails: organizationEmail,
    hasMap,
    priceRange,
    currenciesAccepted,
    paymentAccepted,
  } = contacts;

  const { name: organizationName, legalName, alternateName, description, postalAddress, contactPoint } = address;

  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': organizationType,
    '@id': `${siteUrl}/#Organization`,
    name: organizationName,
    description,
    url: siteUrl,
    logo: siteLogo,
  };
  if (siteBusinessPhoto) {
    schema.image = Array.isArray(siteBusinessPhoto) ? [...siteBusinessPhoto] : siteBusinessPhoto;
  }

  if (postalAddress) {
    const o: Record<string, any> = {
      '@type': 'PostalAddress',
      ...postalAddress,
    };
    if (postalAddress.streetAddress) {
      o.streetAddress = postalAddress.streetAddress.join(', ');
    }
    delete o.addressCountryName;
    schema.address = o;
  }

  if (legalName) {
    schema.legalName = legalName;
  }
  if (alternateName) {
    schema.alternateName = alternateName;
  }

  if (organizationPhone) {
    schema.telephone = utils.formatPhone(organizationPhone[0]);
  }
  if (organizationEmail) {
    [schema.email] = organizationEmail;
  }

  if (geo) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      ...geo,
    };
  }

  if (contactPoint) {
    schema.contactPoint = contactPoint.map(({ name, contactType, phones, emails, areaServed }) => {
      const o: Record<string, any> = {
        '@type': 'ContactPoint',
        name,
        contactType,
      };
      if (phones) {
        o.telephone = phones.reduce((acc, curr) => `${acc}${acc ? ', ' : ''}${utils.formatPhone(curr)}`, '');
      }
      if (emails) {
        o.email = emails.join();
      }
      if (areaServed) {
        o.areaServed = areaServed;
      }
      return o;
    });
  }

  if (socialLinks) {
    schema.sameAs = Object.keys(socialLinks).map((key) => socialLinks[key]!.to);
  }

  if (currenciesAccepted) {
    schema.currenciesAccepted = currenciesAccepted;
  }
  if (paymentAccepted) {
    schema.paymentAccepted = paymentAccepted;
  }
  if (priceRange) {
    schema.priceRange = priceRange;
  }

  if (Array.isArray(openingHours)) {
    /*
    if (dows) {
      schema.openingHours = getOpeningHours(openingHours, dows);
    }
    */
    schema.openingHoursSpecification = getOpeningHoursSpecification(openingHours);
  }

  if (hasMap) {
    schema.hasMap = hasMap;
  }

  return schema;
};

export default getOrganizationSchema;
