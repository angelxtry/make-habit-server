import { GraphQLDate, GraphQLDateTime } from 'graphql-iso-date';

const DateResolver = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
};

export default DateResolver;
