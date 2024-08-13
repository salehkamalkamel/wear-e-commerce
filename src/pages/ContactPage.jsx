import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Input from "../ui/Input";

export default function ContactPage() {
  return (
    <div className="p-10 flex flex-col rounded-2xl bg-gray-50 mx-auto my-12 max-w-3xl w-full gap-6 shadow-lg">
      <Heading as="h5" className="pb-4 text-center">
        Contact Us
      </Heading>
      <p className="text-center text-custom-black-80 mb-6">
        We would love to hear from you! Please fill out the form below to get in
        touch with us.
      </p>
      <form className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input heading="First Name" required />
          <Input heading="Last Name" required />
        </div>
        <Input heading="Email" type="email" required />
        <div className="flex flex-col gap-2">
          <label
            htmlFor="observation"
            className="font-normal text-[1rem] text-custom-black-80"
          >
            Observation
          </label>
          <textarea
            id="observation"
            name="observation"
            placeholder="Your message or observation here..."
            className="bg-transparent outline-none border border-custom-black-80 rounded-lg h-[7rem] w-full resize-none p-2"
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="agree" name="agree" required />
          <label htmlFor="agree" className="text-sm text-custom-black-80">
            I consent to being contacted by the team *
          </label>
        </div>
        <Button className="w-full">Submit</Button>
      </form>
    </div>
  );
}
