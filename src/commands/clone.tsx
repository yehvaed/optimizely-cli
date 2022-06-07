import { Text } from 'ink';
import React from "react";
import { useQuery } from '../hooks/useQuery';
import { getExperiment } from '../services/experiments';
import PropTypes from 'prop-types';

export interface CloneProps {
    uri: string;
}

const Clone: React.FC<CloneProps> = ({ uri }) => {
    const experimentId = parseInt((uri as string).match(/experiments\/([0-9]+)/)?.[1] || "");

    const { data } = useQuery(
        ["experiment", uri],
        () => getExperiment(experimentId)
    );

    data;

    return <Text>{JSON.stringify(data) || ""}</Text>
}

Clone.propTypes = {
    /// link to experiment
    uri: PropTypes.string.isRequired
};

Clone.positionalArgs = [
    'uri'
];

export default Clone;