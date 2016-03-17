/**
 * 测试点击 'Add resources' 按钮，会新增一个 resource
 */

import React from 'react';
import {mount} form 'enzyme';

describe ('Enzyme Mount', function() {
    it('Add a new Resource', function() {
        let app = mount(<App/>);
        let len = app.find('.resource').length;
        let input = app.find('input').get(0);
        input.value = 'new resource';
        app.find('.add').simulate('click');
        expect(app.find('.resource').length).to.equal(len + 1);
    });
});