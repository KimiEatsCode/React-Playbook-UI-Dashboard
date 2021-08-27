import React, { useContext } from "react";
import {
  Card,
  Flex,
  FlexItem,
  Layout,
  LineGraph,
  SectionSeparator,
} from "playbook-ui";
import { GraphContext  } from "../MyProvider/MyProvider";

const data2 = [
  {
    name: "Number of Installations",
    data: [322, 43, 57177, 69658, 97031, 4, 137133, 154175],
  },
];

// const data = [{
//   name: 'Number of Installations',
//   data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
// }]


const LineGraphDefault = (props) => {
  const graph = useContext(GraphContext);


return (
  <div>
 
    <Flex flex={4}>
      <FlexItem>
{graph.name}
        <Card padding="20%">
          <LineGraph
            chartData={data2}
            id="line-fixed-height"
            xAxisCategories={[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ]}
            yAxisMin={0}
            {...props}
          />
        </Card>
      </FlexItem>
    </Flex>


  </div>
);
}

export default LineGraphDefault;
