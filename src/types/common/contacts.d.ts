interface Contacts extends Record<string, any> {
  organizationType: 'LocalBusiness' | 'ProfessionalService';
  geo?: {
    latitude: number;
    longitude: number;
  };
  hasMap?: string;
  embedMap?: string;
  phones?: Array<Phone>;
  voice?: Record<string, string>;
  // skype, whatsapp, telegram, viber

  fax?: string

  emails: Array<Email>;

  openingHours?: Array<[string, Time, Time]>;
  /*
  - ['mo-sa', '09:00', '18:00']
  - ["mo", "10:00", "18:00"]
  - ["tu", "10:00", "18:00"]
  - ["we", "10:00", "18:00"]
  - ["th", "10:00", "18:00"]
  - ["fr", "10:00", "18:00"]
  # day off
  - ['su', '00:00', '00:00']
  # 24/7
  - ["su", "00:00", "23:59"]
  */

  priceRange?: '$' | '$$' | '$$$' | '$$$$'

  foundingDate?: ISODate;
}
