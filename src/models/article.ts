//文章模型

import {ORM,ORM_TYPE} from '../utils';

let Article= ORM.define('s_article', {
  aTitle: {
    type: ORM_TYPE.STRING,
    field: 'a_title'
  },
  aContent: {
    type: ORM_TYPE.STRING,
    field:'a_content'
  },
  aAuthor:{
    type:ORM_TYPE.STRING,
    field:'a_author'
  }
}, {
  defaultScope:{
    limit: 1
  },
  freezeTableName: true
});

//init table
export async function initArticle(){
  return await Article.sync({force:false}); 
}

export async function getArticle(offset){
  return await Article.findAndCountAll({
    offset: offset||0
  })
}

export async function createArticle(title,content,author){
  return await Article.create({
    aTitle:title,
    aContent:content,
    aAuthor:author
  })
}