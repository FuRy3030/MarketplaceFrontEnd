import { EuiDatePicker, EuiFormRow } from "@elastic/eui";
import moment from "moment";
import { Moment } from "moment";
import { useState } from "react";
import 'moment-timezone';

interface MyDatePickerProps {
    Label?: string;
    OnChange?: (Date: Moment) => void;
    HelpText?: string;
    Placeholder?: string;
    ClassName?: string;
    FullWidth?: boolean;
    Inline?: boolean;
    ShowTimeSelect?: boolean;
    Shadow?: boolean;
}

function MyDatePicker(Props: MyDatePickerProps) {
    const [InlineDate, SetInlineDate] = useState<Moment>(moment().tz('Europe/Warsaw'));
    
    if (Props.Inline) {
        return (
            <EuiDatePicker
                selected={InlineDate}
                onChange={(Date: Moment) => {
                    SetInlineDate(Date);
                    Props.OnChange && Props.OnChange(Date);
                }}
                inline
                showTimeSelect={Props.ShowTimeSelect}
                shadow={Props.Shadow}
                fullWidth={Props.FullWidth}
            />
        );
    } else {
        return (
            <></>
            // <EuiFormRow label={Props.Label} helpText={Props.HelpText} fullWidth={Props.FullWidth}
            //     isInvalid={!!errors[Props.Name]} error={errors[Props.Name]?.message?.toString()} className={Props.ClassNameRow}>
            //     <EuiDatePicker
            //         selected={InlineDate}
            //         onChange={(Date: Moment) => {
            //             SetInlineDate(Date);
            //             Props.OnChange && Props.OnChange(Date);
            //         }}
            //         inline
            //         showTimeSelect={Props.ShowTimeSelect}
            //         shadow={Props.Shadow}
            //         fullWidth={Props.FullWidth}
            //     />
            // </EuiFormRow>
        );
    }
};

export default MyDatePicker;