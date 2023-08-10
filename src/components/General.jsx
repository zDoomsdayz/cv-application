export default function GeneralInformation({ general, setGeneral }) {
  const data = [
    { key: 0, name: "fullName", label: "Full Name", placeholder: "Enter Full Name" },
    { key: 1, name: "email", label: "Email", placeholder: "Enter Email" },
    { key: 2, name: "phone", label: "Phone", placeholder: "Enter Phone" },
    { key: 3, name: "country", label: "Country", placeholder: "Enter Country" },
  ];

  function handleInputChange(key, value) {
    setGeneral({
      ...general,
      [key]: value,
    });
  }
  return (
    <form className="generalInfo">
      <p>Personal Details</p>
      {data.map((o) => {
        return (
          <div key={o.key}>
            <div>
              <label htmlFor={o.name}>{o.label}</label>
            </div>
            <input id={o.name} name={o.name} placeholder={o.placeholder} value={general[o.name] || ""} onChange={(e) => handleInputChange(o.name, e.target.value)} />
          </div>
        );
      })}
    </form>
  );
}
