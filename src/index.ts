import { SerieComponent } from './components/serie/serie';
import { SERIE } from './mocks/seriesMock';

//new SerieComponent('.container', SERIE[0]);

SERIE.forEach((item) => {
  new SerieComponent('.series-list', item);
});
