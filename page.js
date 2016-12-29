/**
 * 芒果TV客户端分页公共组件
 * author:zl
 * des:客户端分页公共组件
 * time: 2016-10-25
 * parames: json返回数据，cur_page请求的当前页码，pageUL为分页的ul
 */


function get_page(json,cur_page) {
	var total_page = parseInt(json.data.total/prepage+1);
	cur_page = parseInt(cur_page);
    var firstPage = "<li><a class='prev turn' href='javascript:void(0)' title='上一页' node-type='page-prev'></a></li>";
    var lastPage = "<li><a class='next turn' href='javascript:void(0)' title='下一页' node-type='page-next'></a></li>";
    var result = "";
    for(var i = 1; i <= total_page; i++) {
    	if(i == 2 && cur_page - 5 > 1) {
            i = cur_page - 5;
            result += "<li><a class='ellipsis' href='javascript:void(0)'>...</a></li>";
        }else if(i == cur_page + 5 && cur_page + 5 < total_page) {
            i = total_page - 1;
            result += "<li><a class='ellipsis' href='javascript:void(0)'>...</a></li>";
        }else{
            if(i == cur_page){
                result += "<li><a class='current' href='javascript:void(0)' data-index='" + i + "'>"+i+"</a></li>";
            }else{
                result += "<li><a href='javascript:void(0)' data-index='" + i + "'>"+i+"</a></li>";
            }
            
        }
    }
    pageUL.append(result).prepend(firstPage).append(lastPage);
    if (cur_page==1) {
		pageUL.find(".prev").parent("li").remove();
    }
    if(cur_page==total_page){
		pageUL.find(".next").parent("li").remove();
    };
    if (pageUL.children('li').length==1) {
    	pageUL.children('li').hide();
    };
} 
