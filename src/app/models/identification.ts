export interface IdentificationTemplate {
  id?: number;
  firstName: string;
  secondName?: string;
  lastName: string;
  email: string;
  password: string;
  passwordRepeated: string;
  major: string;
  terms: boolean,
}

export interface SignInTemplate {
  password: string;
  email: string;
}


export const MAJOR_ARRAY = [
      { major: 'Ingeniería mecánica'},
      { major: 'Ingeniería en computación'},
      { major: 'Ingeniería eléctrica'},
      { major: 'Ingeniería aeroespacial' },
      { major: 'Ingeniería civil' },
      { major: 'Bioengeniería'},
      { major: 'Ingeniería en energías renovables'},
      { major: 'Ingeniería electrónica'},
      { major: 'Ingeniería mecatrónica' },
      { major: 'Licenciatura en sistemas computacionales' },
      { major: 'Otro' },

    ];
