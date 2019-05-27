import React from 'react';
import { Statistic, Icon } from 'antd';
import { statusCode } from 'generated/globalTypes';

export interface IStatusStatisticProps
{
    message: string;
    code: statusCode;
}

export const StatusStatistic: React.FunctionComponent<IStatusStatisticProps> = (props) =>
{
    const getIcon = (code: statusCode) =>
    {
        console.log(code);
        switch (code)
        {
            case "SUCCESS":
                return <Icon type="check-circle" />;
            case "WARNING":
                return <Icon type="exclamation-circle" />;
        }
    };

    return (
        <Statistic title="Status" value={props.message} prefix={getIcon(props.code)} />
    );
}