"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { profileFormSchema } from "@/lib/validator";
import { z } from "zod";
import { UserData } from "@/lib/types";
import axios from "axios";
import { updateStudentProfile } from "@/helpers/updateStudentProfile";
// import { IEvent } from "@/lib/database/models/profile.model";

type UserProps = {
  dbUserId: string;
  username: string;
  profile?: UserData;
};

const ProfileForm = ({ profile }: UserProps) => {
  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      // username: profile?.enrollment_number,
      enrollment_number: profile?.enrollment_number,
      student_name: profile?.student_name,
      year_of_admission: profile?.year_of_admission,
      student_class: profile?.student_class,
      birth_place: profile?.birth_place,
      state: profile?.state,
      nationality: profile?.nationality,
      religion: profile?.religion,
      father_name: profile?.father_name,
      occupation: profile?.occupation,
      parents_mobile: profile?.parents_mobile,
      guardian_name: profile?.guardian_name,
      // address: profile?.add,
      guardian_profession: profile?.guardian_profession,
      guardian_mobile_number: profile?.guardian_mobile_number,
      guardian_relation: profile?.guardian_relation,
      annual_income: profile?.annual_income,
      present_address: profile?.present_address,
      pin_code: profile?.pin_code,
      permanent_address: profile?.permanent_address,
      mentor_id: profile?.mentor_id,
      mentor_name: profile?.mentor_name,
      batch: profile?.batch,
    },
  });

  async function onSubmit(values: z.infer<typeof profileFormSchema>) {
    try {
      // Append dbUserId and username to the form data
      const userProfileData = {
        ...values
      };

      console.log(userProfileData)
      // Call updateStudentProfile function and pass the form data
      await updateStudentProfile(userProfileData);

      // Redirect or perform any other actions after successful update
      window.location.href = '/personalProfile';

    } catch (error) {
      console.error('Error creating user profile:', error);
      // Handle error as needed
    }
  }

  return (
    <>
      <Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    <table className="w-full">
      <tbody>
        {/* <tr>
          <td className="font-bold">Username</td>
          <td>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <Input placeholder="Enter username" {...field} />
              )}
            />
          </td>
        </tr> */}
        <tr>
          <td className="font-bold">Enrollment No</td>
          <td>
            <FormField
              control={form.control}
              name="enrollment_number"
              render={({ field }) => (
                <Input placeholder="Enter enrollment number" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Full Name</td>
          <td>
            <FormField
              control={form.control}
              name="student_name"
              render={({ field }) => (
                <Input placeholder="Enter full name" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Year of Admission</td>
          <td>
            <FormField
              control={form.control}
              name="year_of_admission"
              render={({ field }) => (
                <Input placeholder="Enter year of admission" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Class</td>
          <td>
            <FormField
              control={form.control}
              name="student_class"
              render={({ field }) => (
                <Input placeholder="Enter class" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Birth Place</td>
          <td>
            <FormField
              control={form.control}
              name="birth_place"
              render={({ field }) => (
                <Input placeholder="Enter birth place" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">State</td>
          <td>
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <Input placeholder="Enter state" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Nationality</td>
          <td>
            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <Input placeholder="Enter nationality" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Religion</td>
          <td>
            <FormField
              control={form.control}
              name="religion"
              render={({ field }) => (
                <Input placeholder="Enter religion" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Father's Name</td>
          <td>
            <FormField
              control={form.control}
              name="father_name"
              render={({ field }) => (
                <Input placeholder="Enter father's name" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Occupation</td>
          <td>
            <FormField
              control={form.control}
              name="occupation"
              render={({ field }) => (
                <Input placeholder="Enter occupation" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Parent's Mobile No</td>
          <td>
            <FormField
              control={form.control}
              name="parents_mobile"
              render={({ field }) => (
                <Input placeholder="Enter parent's mobile number" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Guardian Name</td>
          <td>
            <FormField
              control={form.control}
              name="guardian_name"
              render={({ field }) => (
                <Input placeholder="Enter guardian name" {...field} />
              )}
            />
          </td>
        </tr>
        {/* <tr>
          <td className="font-bold">Address</td>
          <td>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <Input placeholder="Enter address" {...field} />
              )}
            />
          </td>
        </tr> */}
        <tr>
          <td className="font-bold">Guardian Profession</td>
          <td>
            <FormField
              control={form.control}
              name="guardian_profession"
              render={({ field }) => (
                <Input placeholder="Enter guardian profession" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Guardian Mobile Number</td>
          <td>
            <FormField
              control={form.control}
              name="guardian_mobile_number"
              render={({ field }) => (
                <Input placeholder="Enter guardian mobile number" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Relation</td>
          <td>
            <FormField
              control={form.control}
              name="guardian_relation"
              render={({ field }) => (
                <Input placeholder="Enter relation" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Annual Income</td>
          <td>
            <FormField
              control={form.control}
              name="annual_income"
              render={({ field }) => (
                <Input placeholder="Enter annual income" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Present Address</td>
          <td>
            <FormField
              control={form.control}
              name="present_address"
              render={({ field }) => (
                <Input placeholder="Enter present address" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Pin Code</td>
          <td>
            <FormField
              control={form.control}
              name="pin_code"
              render={({ field }) => (
                <Input placeholder="Enter pin code" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Permanent Address</td>
          <td>
            <FormField
              control={form.control}
              name="permanent_address"
              render={({ field }) => (
                <Input placeholder="Enter permanent address" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Mentor ID</td>
          <td>
            <FormField
              control={form.control}
              name="mentor_id"
              render={({ field }) => (
                <Input placeholder="Enter mentor ID" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Mentor Name</td>
          <td>
            <FormField
              control={form.control}
              name="mentor_name"
              render={({ field }) => (
                <Input placeholder="Enter mentor name" {...field} />
              )}
            />
          </td>
        </tr>
        <tr>
          <td className="font-bold">Batch</td>
          <td>
            <FormField
              control={form.control}
              name="batch"
              render={({ field }) => (
                <Input placeholder="Enter batch" {...field} />
              )}
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div className="mt-4 flex justify-end items-end mr-0 "> {/* ml-auto to push the button to the right */}
      <Button  type="submit">Submit</Button>
    </div>
  </form>
</Form>
</>
  );
};

export default ProfileForm;
