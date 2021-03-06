import React from 'react';
import { Item } from 'react-html-email';
import ComplianceRows from './complianceRows';
import ComplianceHeader from './complianceHeader';

class ComplianceReport extends React.Component {
  render() {
    const { flatCompliance, compliance, regulator, index } = this.props;
    return (
      <Item align="center" width="100%" style={{ backgroundColor: '#FFFFFF' }}>
        <div style={{ width: 'auto' }}>
          <ComplianceHeader {...this.props} />
          <ComplianceRows
            regulator={regulator}
            flatCompliance={flatCompliance}
            compliance={compliance}
            reportIndex={index}
          />
        </div>
      </Item>
    );
  }
}

export default ComplianceReport;
