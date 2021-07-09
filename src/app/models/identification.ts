export interface IdentificationTemplate {
  id?: number;
  firstName: string;
  secondName?: string;
  lastName: string;
  email: string;
  password: string;
  passwordRepeated: string;
  major: string;
}

export interface SignInTemplate {
  password: string;
  email: string;
}


export const MAJOR_ARRAY = [
      { major: 'Ingeniería mecánica'},
      { major: 'Ingeniería en computación'},
      { major: 'Ingeniería eléctrica'},
      { major: 'Ingeniería aeroespacial' }
    ];
