alter session set "_ORACLE_SCRIPT" = true;

create user dev IDENTIFIED BY dev;
grant connect, resource to dev;
alter user dev default TABLESPACE users quota UNLIMITED on users;




-- 게시글 번호, 제목, 내용, 작성자, 조회수, 생성일자, 변경일자
create table tbl_board (
  board_no number, --게시글번호
  title    varchar2(100) not null,  --게시글 제목
  content  varchar2(1000) not null,  -- 게시글 내용
  writer   varchar2(30) not null,  --게시글 작성자
  view_cnt  number default 0,  -- 조회 수
  creation_date date default sysdate,  --데이터 생성시점
  list_update_date date default sysdate  --수정시점 저장
);
alter table tbl_board add CONSTRAINT pk_od PRIMARY KEY (board_no);
create sequence board_seq;  --시퀀스

insert into tbl_board (board_no, title, content, writer)
values (board_seq.nextval, '게시글 등록', '게시글 등록 연습입니다','홍길동');

insert into tbl_board (board_no, title, content, writer)
values (board_seq.nextval, '등록 테스트', 'HTML, CSS, Javascript입니다' ,'홍길동');

insert into tbl_board (board_no, title, content, writer)
values (board_seq.nextval, '댓글등록되나요?', '기능을만들겁니다','김길동');


select  *
from  tbl_board;
  