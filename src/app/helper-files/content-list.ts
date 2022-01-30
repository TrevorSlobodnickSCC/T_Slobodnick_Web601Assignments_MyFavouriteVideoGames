import {Content} from './content-interface'

export class ContentList{
    _contentList: Content[];

    constructor(){
        this._contentList = [];
    }

    get contentList(): Content[]{
        return this._contentList;
    }

    add(newContent: Content){
        this._contentList.push(newContent);
    }

    length(): number{
        return this._contentList.length;
    }

    displayAtIndex(index: number): string{
        if(index < this._contentList.length){
            const contentToDisplay = this._contentList[index];
            //id, title, description, creator, imgURL?, type?, tags?
            return `<div class="card" id="card-${contentToDisplay.id}">
                        <p class="card-type">${contentToDisplay.type}</p>
                        <h5 class="card-title">${contentToDisplay.title}</h5>
                        <img class="card-img" src="${contentToDisplay.imgURL}" alt=""/>
                        <p class="card-description">${contentToDisplay.description}</p>
                        <div class="card-expand">
                            <p class="card-creator">${contentToDisplay.creator}</p>
                        </div>
                    </div>`;                   
        }
        else{
            return `<p class="error-msg">Index "${index}" cannot be found in the array -- must be less than ${this._contentList.length}</p>`
        }
    }
}