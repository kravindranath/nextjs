import _get from 'lodash/get';
import _map from 'lodash/map';
import { getFirst } from 'src/utils/helpers';

const EMPTY_STR = '';

export function parseLabel(_data) {
    const data = _data || {};
    const results = _map(data.results, (item)=>{
        const description = _get(item, 'description', EMPTY_STR);
        const applicationNumber = _get(item, 'openfda.application_number', EMPTY_STR);
        const name = _get(item, 'openfda.brand_name', EMPTY_STR);
        const genericName = _get(item, 'openfda.generic_name', EMPTY_STR);
        const manufacturer = _get(item, 'openfda.manufacturer_name', EMPTY_STR);
        const route = _get(item, 'openfda.route', EMPTY_STR);
        const substance = _get(item, 'openfda.substance_name', EMPTY_STR);
        const pharmMOA = _get(item, 'openfda.pharm_class_moa', EMPTY_STR);
        const pharmCS = _get(item, 'openfda.pharm_class_cs', EMPTY_STR);
        const pharmEPC = _get(item, 'openfda.pharm_class_epc', EMPTY_STR);
        const nameLen = getFirst(name).length || 0;
        if(nameLen > 0) {
            return {
                description: getFirst(description),
                applicationNumber: getFirst(applicationNumber),
                name: getFirst(name),
                genericName: getFirst(genericName),
                manufacturer: getFirst(manufacturer),
                route: getFirst(route),
                substance: getFirst(substance),
                pharmMOA: getFirst(pharmMOA),
                pharmCS: getFirst(pharmCS),
                pharmEPC: getFirst(pharmEPC)
            };
        }else{
            return {};
        }
    });
    return {
        disclaimer: _get(data, 'meta.disclaimer'),
        terms: _get(data, 'meta.terms'),
        license: _get(data, 'meta.license'),
        results: results
    };
}