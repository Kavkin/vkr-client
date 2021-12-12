import { TextInput, Button } from "evergreen-ui";
import React, { FC } from "react";

type CreateEnquiryProps = {
  className?: string;
};

const CreateEnquiry: FC<CreateEnquiryProps> = (props): JSX.Element => {
  const handleSubmit: React.FormEventHandler = (ev) => {
    ev.preventDefault();
    const target = ev.target as any;
    const result = {
      name: target.name.value,
      phone: target.phone.value,
      type: "INTERNET",
    };
    console.log(result);
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
