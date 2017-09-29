import { Router } from 'express';

import IndexController from './controllers/index.controller';
import DashboardsController from './controllers/dashboards.controller';
import VisualizationsController from './controllers/visualizations.controller';
import TestController from './controllers/test.controller';
import errorHandler from './middleware/error-handler';

const routes = new Router();

routes.get('/', IndexController.index);

// Users
routes.get('/dashboards/:dashboard', DashboardsController.index);
routes.get('/visualizations/:visualization', VisualizationsController.index);
routes.post('/visualizations/fetch/:visualization', VisualizationsController.fetch);

// testing routes
routes.get('/testing/reports', TestController.reports);
routes.get('/testing/reports/:report_id', TestController.reportsDetail);
routes.post('/testing/update/reports', TestController.updateDataSet);
routes.get('/testing/reports/delete/:report_id', TestController.deleteReports);

routes.use(errorHandler);

export default routes;
