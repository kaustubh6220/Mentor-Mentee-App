// types.ts or types.d.ts
export type UserData = {
    _id: string;
    student_name: string;
    year_of_admission: number;
    student_class: string;
    student_email_id: string;
    date_of_birth: string;
    birth_place: string;
    state: string;
    nationality: string;
    religion: string;
    father_name: string;
    occupation: string;
    parents_mobile: string;
    guardian_name: string;
    guardian_profession: string;
    guardian_mobile_number: string;
    guardian_relation: string;
    annual_income: string;
    present_address: string;
    pin_code: string;
    permanent_address: string;
    student_id: string;
    enrollment_number: string;
    mentor_id: string;
    mentor_name: string;
    batch: string;
    updatedAt: string;
    createdAt: string;
    __v: number;
};


export interface Student {
    map(arg0: (student: any) => import("react").JSX.Element): import("react").ReactNode;
    _id: string;
    student_name: string;
    year_of_admission: number;
    student_class: string;
    student_email_id: string;
    date_of_birth: string;
    birth_place: string;
    state: string;
    nationality: string;
    religion: string;
    father_name: string;
    occupation: string;
    parents_mobile: string;
    guardian_name: string;
    guardian_profession: string;
    guardian_mobile_number: string;
    guardian_relation: string;
    annual_income: string;
    present_address: string;
    pin_code: string;
    permanent_address: string;
    student_id: string;
    enrollment_number: string;
    mentor_id: string;
    mentor_name: string;
    batch: string;
    updatedAt: string;
    createdAt: string;
    __v: number;
  }
  