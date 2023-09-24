import { useFormContext } from "react-hook-form";
import { EuiFieldText, EuiFormRow, EuiSelect, EuiSelectOption } from '@elastic/eui';
import clsx from "clsx";
import { ReactElement } from "react";

interface MySimpleSelectFieldProps {
    Label: string;
    Name: string;
    Options: EuiSelectOption [];
    OnChange?: () => void;
    OnChangeWithValue?: (Value: any) => void;
    HelpText?: string;
    Placeholder?: string;
    ClassName?: string;
    ClassNameRow?: string;
    FullWidth?: boolean;
    IsLoading?: boolean;
    Prepend?: ReactElement | ReactElement [] | string;
    Append?: ReactElement | ReactElement [] | string;
};

function MySimpleSelectField(Props: MySimpleSelectFieldProps) {
    const { watch, setValue, formState: { errors }, trigger } = useFormContext();

    return (
        <EuiFormRow label={Props.Label} helpText={Props.HelpText} fullWidth={Props.FullWidth}
            isInvalid={!!errors[Props.Name]} error={errors[Props.Name]?.message?.toString()} className={Props.ClassNameRow}
        >
            <EuiSelect
                value={watch(Props.Name)}
                onChange={(e) => {
                    setValue(Props.Name, e.target.value);
                    Props.OnChange && Props.OnChange();
                    Props.OnChangeWithValue && Props.OnChangeWithValue(e.target.value);
                    trigger(Props.Name);
                }}
                options={Props.Options}
                placeholder={Props.Placeholder}
                className={clsx('StandardFont', Props.ClassName)}
                fullWidth={Props.FullWidth}
                isInvalid={!!errors[Props.Name]}
                isLoading={Props.IsLoading}
                prepend={Props.Prepend}
                append={Props.Append}
            />
        </EuiFormRow>
    );
};

export default MySimpleSelectField;