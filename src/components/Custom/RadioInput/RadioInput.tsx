import s from "./RadioInput.module.css";

type Data = {
  value: string;
  id: number;
};

interface CustomRadioProps {
  selectedValue: string;
  onChange: (value: string) => void;
  data: Data[];
}

export const RadioInput = ({
  selectedValue,
  onChange,
  data,
}: CustomRadioProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  };
  return (
    <div className={s.SvgWrap}>
      {data.map((item) => (
        <div key={item.id} className={s.q}>
          <label className={s.radioWrapper}>
            <input
              type="radio"
              value={item.value}
              checked={selectedValue === item.value}
              onChange={handleChange}
            />
          </label>
          <span className={s.text}>{item.value}</span>
        </div>
      ))}
      
    </div>
  );
};
