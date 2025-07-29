package com.yedam;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

interface Controller {		//Controller 자체도 하나의 data type
	public void exe();
}
class Sample implements Controller {

	@Override
	public void exe() {
		System.out.println("Sample 클래스");
		
	}
	
}
public class Main {
	public static void main(String[] args) {
		ArrayList<Book> list = new ArrayList();
		Book book = list.get(0);
		
		
		// 키와 값을 쌍으로 담을 수 있다
		// 키에 해당하는 데이터타입은 string, value에는 integer
		// 키는 문자, 값은 정수타입으로 ↓
		// Map은 interface
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("홍길동", 80);
		map.put("김지찬", 78);
//		map.put(200,20) <-이러면 X
		
		// key값을 던져주면 value를 반환 ↓
		Integer result = map.get("홍길동");
		System.out.println(result);
		
		Map<String, Controller> controls = new HashMap<>();
		controls.put("abc.do", new Sample());
		controls.put("ddc.do", new Controller() {
		//controller에는 exe라는 추상머시기↑가 있기떄문에 반드시 구현해줘야 함
			
		@Override
			public void exe() {
			System.out.println("Test입니다");
			}
		});
		
		Controller val = controls.get("Sample");
		val.exe();
//		BoardService svc = new BoardServiceImpl();	//업무기능
		
		
//		int searchNo = 1;
		
// 		조회, 조회수 증가 ↓ => '업무'라는 단위로(조회: 글번호조회 + 조회카운트 => 세트로 묶여져야된다)
//		BoardVO board = svc.searchBoard(searchNo);
		
			//System.out.println(board.toString());
	}
}

