const Divider = ({ color }: { color: string }) => {
  return (
    <table width={"100%"}>
      <tr>
        <td height={10}></td>
      </tr>
      <tr>
        <td style={{ width: "100%", borderBottom: `1px solid ${color}` }}></td>
      </tr>
      <tr>
        <td height={10}></td>
      </tr>
    </table>
  );
};

export { Divider };
