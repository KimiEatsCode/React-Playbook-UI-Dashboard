import React from 'react';
import LineGraphNav from '../LineGraphNav/LineGraphNav';
import ListLayoutRight from '../ListLayoutRight/ListLayoutRight';
import LineGraphDefault from '../LineGraphDefault/LineGraphDefault';
import { Card,Flex, FlexItem, SectionSeparator } from 'playbook-ui';
import styled from 'styled-components'

const GraphTitle = styled.p `
color:#242b42;
font-weight:bold;
padding:10px 20px;
text-align:left;
`;

const KpiChart = (props) => (

  <div>
    <Card padding="none">
      {/* <Card.Header padding="xs" style={{BackgroundColor:"#fff"}}>
        <GraphTitle>Key Performance Indicators</GraphTitle>

    </Card.Header> */}
     <Card.Body padding="none">
     <GraphTitle>Key Performance Indicators</GraphTitle>
      </Card.Body>
      <SectionSeparator variant="card"></SectionSeparator>
     <Flex
        orientation="row"
        wrap


    >

      <FlexItem   ><ListLayoutRight useLayout="false"></ListLayoutRight></FlexItem>

      <FlexItem>
    <LineGraphDefault/></FlexItem>
    </Flex>
    </Card>
  </div>
);


export default KpiChart;
