import { useMutation } from '@apollo/react-hooks';
import { Slider } from 'antd';
import { SliderValue } from 'antd/lib/slider';
import { FixtureControllerQuery_activeFixture_channels } from 'generated/FixtureControllerQuery';
import { SetFixtureAttribute, SetFixtureAttributeVariables } from 'generated/SetFixtureAttribute';
import gql from 'graphql-tag';
import React, { useState } from 'react';

export interface IDmxChannelSliderProps
{
    channel: FixtureControllerQuery_activeFixture_channels;
    universeId: number;
    fixtureAddress: number;
}

const setFixtureDmxChannelMutation = gql`
    mutation SetFixtureDmxChannel($universeId: Int!, $fixture: Int!, $attribute: String!, $value: Float!) {
        setFixtureAttribute(universeId: $universeId, fixture: $fixture, attribute: $attribute, value: $value)
    }
`;

const steps = {
    0: "0",
    32: "32",
    64: "64",
    96: "96",
    128: "128",
    160: "160",
    192: "192",
    224: "224",
    255: "255"
};

export const DmxChannelSlider: React.FC<IDmxChannelSliderProps> = (props) =>
{
    const [setFixtureAttribute] = useMutation<SetFixtureAttribute, SetFixtureAttributeVariables>(setFixtureDmxChannelMutation);
    const [value, setValue] = useState<number>(props.channel.value);

    const handleChange = (newValue: SliderValue) =>
    {
        const range = props.channel.max - props.channel.min;
        const normalisedValue = (Number(newValue.valueOf()) - props.channel.min) / (range);
        setFixtureAttribute({
            variables: {
                universeId: props.universeId,
                fixture: props.fixtureAddress,
                attribute: props.channel.name,
                value: normalisedValue,
            }
        });
        setValue(newValue.valueOf() as number);
    }

    return (
        <div key={props.channel.name}>
            {props.channel.name}
            <Slider
                min={props.channel.min}
                max={props.channel.max}
                disabled={props.channel.controlled}
                step={1}
                marks={steps}
                value={value}
                onChange={(value) => handleChange(value)}
            />
        </div>
    );
}