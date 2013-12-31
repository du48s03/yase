﻿var Yase=require('yase');
var Search=require('../search');
var fs=require('fs')
var DBNAME='../../../cst/vrimul.ydb';
var db=Yase.use(DBNAME);

QUnit.test("gettext",function() {
		equal(db.getText(0).trim(),'<xml src="s0101m-d1.xml">')
});
QUnit.test("gettag",function() {
		var r=db.getTag('pb.V',0);
		equal(r.name,'pb.V');
		equal(r.slot,10);
		equal(r.vpos,2561);
		equal(r.offset,1);
});
QUnit.test("findtag",function() {
		var r=db.findTag('pb.V','n','1.0001');
		equal(r[0].ntag,0,'findtag');
});
QUnit.test("expand",function() {
		
		var tree=db.customfunc.token2tree.apply(db,["samayaṁ"]);
		var expanded=db.customfunc.expandToken.apply(db, [ tree,[] ]);
		console.log(expanded)
		equal(true,true)
});

QUnit.test("search",function() {
	var res=db.search({query:"anicca",output:["text"]});
	console.log(res)
	equal(true,true)
})
