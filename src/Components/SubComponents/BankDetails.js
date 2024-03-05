import React from "react";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "Sl No",
  "Account Category",
  "Account Number",
  "Payment in favour of",
  "Account Type",
  "Bank Name",
  "IFSC Code",
];

const TABLE_ROWS = [
  {
    sn: 1,
    ac: "Primary",
    acn: "006105027082",
    pifo: "BUILDUP INFRASTRUCTURE PRIVATE LIMITED",
    act: "Current",
    bn: "ICICI BANK LTD",
    ifsc: "ICIC0000061",
  },
];
// 1	Primary	006105027082	BUILDUP INFRASTRUCTURE PRIVATE LIMITED	Current	ICICI BANK LTD	ICIC0000061

const BankDetails = () => {
  return (
    <div>
      <h2 className="mb-2 pl-2 text-xl font-bold">Bank Details</h2>
      <hr className="border-t-2 border-gray-500 mb-4" />
      <div className="pr-4 py-2">
        <div className="w-[70%]">
          <Card className="h-full w-full overflow-hidden overflow-x-scroll">
            <table className="w-full min-w-max table-auto text-left">
              <thead className="bg-blue-200">
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(
                  ({ sn, ac, acn, pifo, act, ifsc, bn }, index) => (
                    <tr key={sn} className="even:bg-blue-gray-50/50">
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {sn}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {ac}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {acn}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {pifo}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {act}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {ifsc}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {bn}
                        </Typography>
                      </td>

                      {/* <td className="p-4">
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="blue-gray"
                  className="font-medium"
                >
                  Edit
                </Typography>
              </td> */}
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
