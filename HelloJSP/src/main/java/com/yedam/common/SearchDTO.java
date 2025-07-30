package com.yedam.common;

import lombok.Data;

// 글목록에 사용되는 파라미터를 담는 class

@Data
public class SearchDTO {
	private int page;
	private String searchCondition;		// T 또는 W가 들어오고
	private String keyword;

}
