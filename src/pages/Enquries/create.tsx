import { TextInput, Button } from "evergreen-ui";
import React, { FC } from "react";

type CreateEnquiryProps = {
  className?: string;
};

const CreateEnquiry: FC<CreateEnquiryProps> = (props): JSX.Element => {
  const handleSubmit: React.FormEventHandler = async (ev) => {
    ev.preventDefault();
    const target = ev.target as any;
    const result = {
      name: target.name.value,
      phone: target.phone.value,
      type: "INTERNET",
    };
    console.log(result);
    const res = await fetch("/enquiries", {
      method: "Put",
      body: JSON.stringify(result),
      headers: { "Content-Type": "application/json", Accept: "*/*" },
    });
  };
  return (
    <form onSubmit={handleSubmit} className="CreateEnquiry">
      <TextInput name="name" placeholder="name" />
      <TextInput name="phone" placeholder="phone" />
      {/* <TextInput name="type" placeholder="type" /> */}
      <Button>Create</Button>
    </form>
  );
};

export default CreateEnquiry;
