
type CountryCode = 'UA' | 'RU' | 'EN';

interface PostalAddress extends Record<string, any> {
  streetAddress: string[];
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: CountryCode;
  addressCountryName: string;
}

type ContactType = 'sales';

interface ContactPoint extends Record<string, any> {
  name: string;
  description:  string;
  contactType: ContactType;
  contactTypeName: string;
  phones: Array<Phone>;
  emails: Array<Email>;
}

interface Address extends Record<string, any> {
  name: string;
  alternateName: string;
  legalName: string;
  description: string;
  postalAddress: PostalAddress;

  contactPoint: Array<ContactPoint>;
}
