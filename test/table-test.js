import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import { Table } from '../src';

describe('<Table/>', function() {
  describe('Default table properties', function() {
    const component = shallow(<Table/>);
    it('is responsive', function() {
      expect(component.find('table').hasClass('table-responsive')).to.equal(true);
    });
    it('Has the hover effect', function() {
      expect(component.find('table').hasClass('table-hover')).to.equal(true);
    });
    it('Is not striped', function() {
      expect(component.find('table').hasClass('table-striped')).to.equal(false);
    });
    it('Is not condensed', function() {
      expect(component.find('table').hasClass('table-condensed')).to.equal(false);
    });
    it('Does not have a border', function() {
      expect(component.find('table').hasClass('table-border')).to.equal(false);
    });
  });

  it('Table should have hover class', function() {
    const component = shallow(<Table tableHover={true}/>);
    expect(component.find('table').hasClass('table-hover')).to.equal(true);
  });

  it('Table should not have hover class', function() {
    const component = shallow(<Table tableHover={false}/>);
    expect(component.find('table').hasClass('table-hover')).to.equal(false);
  });

  it('Table should have a border', function() {
    const component = shallow(<Table tableBordered={true}/>);
    expect(component.find('table').hasClass('table-bordered')).to.equal(true);
  });

  it('Table does not have a border', function() {
    const component = shallow(<Table tableBordered={false}/>);
    expect(component.find('table').hasClass('table-bordered')).to.equal(false);
  });

  it('Table is condensed', function() {
    const component = shallow(<Table tableCondensed={true}/>);
    expect(component.find('table').hasClass('table-condensed')).to.equal(true);
  });

  it('Table is not condensed', function() {
    const component = shallow(<Table tableCondensed={false}/>);
    expect(component.find('table').hasClass('table-condensed')).to.equal(false);
  });

  it('Table is striped', function() {
    const component = shallow(<Table tableStriped={true}/>);
    expect(component.find('table').hasClass('table-striped')).to.equal(true);
  });

  it('Table is not striped', function() {
    const component = shallow(<Table tableStriped={false}/>);
    expect(component.find('table').hasClass('table-striped')).to.equal(false);
  });

  it('Table is responsive', function() {
    const component = shallow(<Table tableResponsive={true}/>);
    expect(component.find('table').hasClass('table-responsive')).to.equal(true);
  });

  it('Table is not responsive', function() {
    const component = shallow(<Table tableResponsive={false}/>);
    expect(component.find('table').hasClass('table-responsive')).to.equal(false);
  });
});
