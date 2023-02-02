import { Serie, SerieStructure } from '../../models/serieStructure';
import { Component } from '../component/component';
import { SerieComponent } from '../serie/serie';

export class Series extends Component {
  constructor(public selector: string, public series: SerieStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  addSerie(serie: SerieStructure) {
    this.series = [...this.series, serie];
    this.render('afterbegin');
  }

  deleteSerie(id: SerieStructure['id']) {
    this.series = this.series.filter((item) => item.id !== id);
    this.render('afterbegin');
  }

  updateSerie(serie: SerieStructure) {
    this.series = this.series.map((item) =>
      item.id === serie.id ? serie : item
    );
    this.render('afterbegin');
    // this.repo.setSeries(this.series);
  }

  render(place: globalThis.InsertPosition) {
    (document.querySelector('.series-list--watched') as HTMLElement).innerHTML =
      '';
    super.render(place);

    // new Add('.series-list--watched', this.addSerie.bind(this));

    this.series.forEach((item) => {
      new SerieComponent(
        '.series-watched>ul',
        item,
        this.deleteSerie.bind(this),
        this.updateSerie.bind(this)
      );
    });
  }

  createTemplate() {
    return `<section class="series"><ul></ul></section>`;
  }
}
