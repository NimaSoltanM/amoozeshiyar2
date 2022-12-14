import { Table } from '@mantine/core';

const index = () => {
  const elements = [
    {
      code: 3991,
      status: 'مجاز به انتخاب واحد / ثبت معتبر انتخاب واحد توسط دانشجو',
      staticFee: '540,000',
      variableFee: '1,700,000',
      totalFee: '2,240,000',
    },
    {
      code: 3992,
      status: 'ثبت نام عادي / ممتاز',
      staticFee: '540,000',
      variableFee: '1,460,000',
      totalFee: '2,000,000',
    },
    {
      code: 4001,
      status: 'مجاز به انتخاب واحد / ثبت معتبر انتخاب واحد توسط دانشجو',
      staticFee: '270,000',
      variableFee: '2,200,000',
      totalFee: '2,470,000',
    },
    {
      code: 4002,
      status: 'مجاز به انتخاب واحد / ثبت معتبر انتخاب واحد توسط دانشجو',
      staticFee: '540,000',
      variableFee: '1,800,000',
      totalFee: '2,340,000',
    },
  ];

  const rows = elements.map((element) => (
    <tr key={element.code}>
      <td>{element.code}</td>
      <td>{element.status}</td>
      <td>{element.staticFee}</td>
      <td>{element.variableFee}</td>
      <td>{element.totalFee}</td>
    </tr>
  ));

  return (
    <Table striped highlightOnHover>
      <thead>
        <tr>
          <th>کد ترم</th>
          <th>آخرین وضعیت دانشجو در ترم</th>
          <th>شهریه ثابت</th>
          <th>شهریه متغیر</th>
          <th>جمع شهریه ثابت و متغیر</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default index;
