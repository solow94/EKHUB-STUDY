// default 인 log는 {} 밖으로 빼줘야 한다.
import log, { getCurrentHour, MyLogger, _ } from './export_import'
import _ from './utility';

_.log('my first test data');
// log(`getTime is ${getTime()}`);

const logger = new MyLogger();
_.log(`current hour is ${logger.getCurrentHour()}`);
_.log(`lectures of Codesquad are logger ${logger.getLectures()}`);