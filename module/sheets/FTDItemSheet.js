export default class FTDItemSheet extends ItemSheet {
  get template() {
    return 'systems/ftd/templates/sheets/${this.Item.data.type}-sheet.html' ;
  }
}
