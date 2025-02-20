import Image from "next/image";
import Link from "next/link";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="w-full h-auto rounded-lg bg-[#05061480] p-8 font-dm-sans text-sm text-[#FFFFFF] flex flex-col gap-3">
      <div className="flex justify-between items-center w-full mb-4 pt-2">
        <h1 className="font-bold font-jost text-[2rem] pl-2">
          Terms & Conditions
        </h1>
        <Link href="/dashboard" className="pr-2">
          <Image src={"/svgs/close.svg"} width={20} height={20} alt="close" />
        </Link>
      </div>
      <div className="flex flex-col gap-2 text-[#FCFCFC]">
        <h2 className="pl-2 text-xl font-semibold font-jost mb-2">
          Prohibited Uses
        </h2>
        <div className="pl-4">
          <p className="text-lg font-medium">
            Users are strictly prohibited from utilizing the product or its
            associated services for any of the following purposes:
          </p>
          <ul className="pl-8 list-disc">
            <li>
              Unauthorized Tracking: Tracking individuals without their explicit
              consent, unless authorized by applicable law (e.g., parents
              tracking minor children).
            </li>
            <li>
              Illegal Activities: Using the tracker for stalking, harassment,
              theft, or any other criminal activity.
            </li>
            <li>
              Privacy Violations: Accessing or disclosing personal data of third
              parties without their consent.
            </li>
            <li>
              Tampering: Modifying or reverse-engineering the product to bypass
              its intended functionality or security features.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-[#FCFCFC]">
        <h2 className="pl-2 text-xl font-semibold font-jost mb-2">
          Compliance with Laws
        </h2>
        <div className="pl-4">
          <ul className="pl-8 list-disc">
            <li>
              Users must comply with all applicable local, national, and
              international laws and regulations regarding the use of tracking
              devices and data collection.
            </li>
            <li>
              It is the user's responsibility to understand and adhere to these
              laws in their respective jurisdiction.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-[#FCFCFC]">
        <h2 className="pl-2 text-xl font-semibold font-jost mb-2">
          User Responsibility
        </h2>
        <div className="pl-4">
          <ul className="pl-8 list-disc">
            <li>
              The user assumes full responsibility for any misuse of the
              product.
            </li>
            <li>
              Disclaimer of Liability: The company is not responsible for any
              illegal actions or misuse of the product by the user. All legal
              consequences arising from such activities are solely the user's
              responsibility.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-[#FCFCFC]">
        <h2 className="pl-2 text-xl font-semibold font-jost mb-2">
          Reporting Misuse
        </h2>
        <div className="pl-4">
          <ul className="pl-8 list-disc">
            <li>
              Any detected misuse of the product may result in immediate account
              suspension or termination.
            </li>
            <li>
              The company reserves the right to report such activities to
              relevant authorities and provide evidence for investigation.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-[#FCFCFC]">
        <h2 className="pl-2 text-xl font-semibold font-jost mb-2">
          Company Intent and Responsibility
        </h2>
        <div className="pl-4">
          <ul className="pl-8 list-disc">
            <li>
              The company’s primary intention is to provide enhanced safety and
              security to end users through the use of the product.
            </li>
            <li>
              Limitation of Liability for Misuse or Incidents: The company is
              not liable for any misuse of the product, or for any incidents,
              accidents, or negative outcomes resulting from the use of the
              product.
            </li>
            <li>
              Users are encouraged to use the product responsibly, and the
              company disclaims any responsibility for actions that lead to harm
              or damage, whether due to misuse or unforeseen events.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-[#FCFCFC]">
        <h2 className="pl-2 text-xl font-semibold font-jost mb-2">
          Limitation of Liability
        </h2>
        <div className="pl-4">
          <ul className="pl-8 list-disc">
            <li>
              The company disclaims all liability for damages or consequences
              arising from the misuse or unauthorized usage of the product.
            </li>
            <li>
              The user agrees to indemnify and hold the company harmless against
              claims or damages resulting from violations of these terms.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-[#FCFCFC] mb-10">
        <h2 className="pl-2 text-xl font-semibold font-jost mb-2">
          Enforcement and Monitoring
        </h2>
        <div className="pl-4">
          <ul className="pl-8 list-disc">
            <li>
              The company may monitor product usage to ensure compliance with
              these terms, subject to privacy regulations.
            </li>
            <li>
              Violators may face penalties, including permanent banning from the
              platform and legal action.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-[#FCFCFC]">
        <h2 className="pl-2 text-2xl font-bold font-jost mb-2">
          Acknowledgment
        </h2>
        <div className="pl-4">
          <p className="text-lg font-medium">
            By using this product, the user acknowledges that:
          </p>
          <ul className="pl-8 list-disc">
            <li>
              They have read, understood, and agreed to these terms and
              conditions.
            </li>
            <li>
              The company's intention is solely to provide better safety and
              security through the use of its product.
            </li>
            <li>
              The company is not responsible for any misuse or illegal
              activities carried out by the user, nor for any incidents,
              accidents, or negative consequences arising from the use of the
              product.
            </li>
            <li>
              Any violation of these terms may lead to immediate termination of
              service and potential legal consequences.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
