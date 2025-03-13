interface CheckboxesProps {
    legend: string;
    options: {
        text: string;
        id: string;
        checked: boolean;
    }[];
}
declare const Checkboxes: React.FC<CheckboxesProps>;
export default Checkboxes;
