import * as React from 'react';
import { Box, Item } from 'react-html-email';
import ComplianceReport from './complianceReport';

class ComplianceReports extends React.Component {
  render() {
    const { flatComplianceDict, complianceDict, regulatorsDict } = this.props;

    return (
      <Box align="center" width="100%" height="auto" style={{ backgroundColor: '#F7F7F7' }}>
        <Item>
          <Box cellSpacing={0} align="center" width="100%" cellPadding={20}>
            {Object.keys(complianceDict).map((key, index) => {
              return (
                <ComplianceReport
                  key={index}
                  flatCompliance={flatComplianceDict[key][0]}
                  compliance={complianceDict[key]}
                  regulator={regulatorsDict[key]}
                  index={index}
                />
              );
            })}
          </Box>
        </Item>
      </Box>
    );
  }
}

export default ComplianceReports;
