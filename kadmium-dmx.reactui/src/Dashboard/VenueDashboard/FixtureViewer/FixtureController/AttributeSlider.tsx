import { Slider } from 'antd';
import { FixtureControllerQuery_activeFixture_attributes } from 'generated/FixtureControllerQuery';
import { SetFixtureAttribute, SetFixtureAttributeVariables } from 'generated/SetFixtureAttribute';
import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { SliderValue } from 'antd/lib/slider';

export interface IAttributeSliderProps
{
    attribute: FixtureControllerQuery_activeFixture_attributes;
    universeId: number;
    address: number;
}

const setFixtureAttributeMutation = gql`
    mutation SetFixtureAttribute($universeId: Int!, $fixture: Int!, $attribute: String!, $value: Float!) {
        setFixtureAttribute(universeId: $universeId, fixture: $fixture, attribute: $attribute, value: $value)
    }
`;

const steps = {
    0: "0",
    0.1: "0.1",
    0.2: "0.2",
    0.3: "0.3",
    0.4: "0.4",
    0.5: "0.5",
    0.6: "0.6",
    0.7: "0.7",
    0.8: "0.8",
    0.9: "0.9",
    1: "1.0"
};

export const AttributeSlider: React.FC<IAttributeSliderProps> = (props) =>
{
    const [setFixtureAttribute] = useMutation<SetFixtureAttribute, SetFixtureAttributeVariables>(setFixtureAttributeMutation);
    const [value, setValue] = useState<number>(props.attribute.value);

    const handleChange = (newValue: SliderValue) =>
    {
        setFixtureAttribute({
            variables: {
                universeId: props.universeId,
                fixture: props.address,
                attribute: props.attribute.name,
                value: newValue.valueOf() as number,
            }
        });
        setValue(newValue.valueOf() as number);
    }

    return (
        <div key={props.attribute.name}>
            {props.attribute.name}
            <Slider
                min={0}
                max={1}
                disabled={props.attribute.controlled}
                step={0.01}
                marks={steps}
                value={value}
                onChange={(value) => handleChange(value)}
            />
        </div>
    );
}