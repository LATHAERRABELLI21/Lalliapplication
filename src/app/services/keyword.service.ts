import {Keyword} from '../models/keyword.model';

export class KeywordService{
    keywords:Keyword[];
    constructor(){
        this.keywords = []; 
    }
    addKeyword(searchWord:string)
    {
        var keyword:Keyword= new Keyword(this.keywords.length+1,searchWord);
        this.keywords.push(keyword);
    }
    getKeywords(){
        return this.keywords;
    }
}