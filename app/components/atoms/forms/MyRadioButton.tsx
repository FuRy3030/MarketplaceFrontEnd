import { EuiFormRow, EuiRadio } from "@elastic/eui";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

export interface MyRadioButtonProps {
    Id: string;
    Label: string;
    Name: string;
    OnChange?: () => void;
    ClassName?: string;
    FullWidth?: boolean;
};

function MyRadioButton(Props: MyRadioButtonProps) {
    const { watch, setValue, formState: { errors }, trigger } = useFormContext();

    return (
        <EuiFormRow fullWidth={Props.FullWidth} isInvalid={!!errors[Props.Name]} 
            error={errors[Props.Name]?.message?.toString()}
        >
            <EuiRadio
                id={Props.Id}
                checked={watch(Props.Name)} 
                onChange={(e) => {
                    setValue(Props.Name, e.target.checked);
                    Props.OnChange && Props.OnChange();
                    trigger(Props.Name);
                }}
                label={Props.Label}
                className={clsx('my-4', Props.ClassName)}
            />
        </EuiFormRow>
    );
};

export default MyRadioButton;