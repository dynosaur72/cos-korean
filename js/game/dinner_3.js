// Plot points:
// Trying to stay overnight.
// Reveal - hippie parents, reading poetry, ...(?)
// Threats -- date your tutor, changing school(?)
// He's distracting you. Movie & Hippies.
// Oh my god, you've been reading my texts!...

function Start_Dinner_3(){

	n("엄마.");

	Choose({
		"그래서 잭이랑 더 공부하는 거예요.": Tutor, // That's why I'm studying more with Jack.
		"저 노력하고 있어요. 진짜로요.": Tutor, //  Look, I'm trying. I really am.
		"제 성적은 멀쩡하다고요.": Tutor // tl awk // My grades are fine.
	});

}

function Tutor(message){

	n(message);
	m("엄마는 네가 걱정돼서 그래. 잭은 좋은 영향이 아니야. I'm worried for you. Jack's not a good influence.");

	if($.hippies){
		m("잭의 부모님이 마약 중독자일 수도 있어... I think his parents might even be drug addicts...");
		n("왜 그런 말을--"); // What makes you say th--
	}else if($.im_a_poet){
		m("걔는 시짓기밖에 안 하잖아. All he does is do poetry.");
		n("왜 그런 말을--");
	}
	
	m("과외 선생님을 붙여줄거야. I'm getting you a home tutor."); // tl awk // [너] 과외 선생님을 구했어.
	n("...네?");

	if($.studying_subject!=$.studying_subject_2){
		m($.studying_subject+"이랑 "+$.studying_subject_2+"을 가르쳐줄거야.");
	}else{
		m($.studying_subject+"을 가르쳐줄거야.");
	}

	m("이름은 클레어야. 똑똑하고, 예쁘고, 백인이고. 너랑 나이도 비슷해.");

	Choose({
		"잭을 그만 만나게 하려고 이러는 거예요? Are you trying to stop me from seeing Jack?": Tutor_Seeing, // 보다 < 만나다
		"걔랑 절 엮으려고 하시는 거예요? Are you trying to matchmake me with her?": Tutor_Matchmake,
		"이 얘기는 나중에 하면 안 돼요? Can we talk about tutors another time?": Tutor_Forget
	});

}

function Tutor_Seeing(message){
	n(message);
	m("잠깐, 잭을 <b>만난다고</b>?");
	m("말 조심하렴. 그렇게 말하니까...");
	
	Choose({
		"우리가 사귀는 거 같다고요? 네. 우리/저희 사귀어요. Like we're dating? Yeah. We are.": function(message){
			n(message);
			m(". . .");
			n(". . .");
			n("...저기요?");
			m(". . .");
			n("아무도 안 계세요? Anyone there?"); // tl awk
			m(". . .");
			Threat_School();
		},
		"그냥 I just meant meeting Jack.": function(message){ // 그냥 논다는 뜻이었어요.
			n(message);
			m("알겠어. Okay. Just being clear about some things."); // 그냥 몇 가지를 명확하게 하는거야. 
			n("네.");
			m(". . .");
			m("클레어 엄청 귀엽던데. Claire's really cute.");
			n("그래요. Sure.");
			m("She has perky breasts."); // 탄력있는 가슴...
			Threat_Tutor();
		},
		"우리/저희. 남친. 사이. 아니에요. We're. Not. Boyfriends.": function(message){
			n(message);
			m(". . .");
			m("알겠어. Okay.");
			m("그런 사이라고 한 적 없는데... 알겠어. I never said you were, but... okay.");
			n("우린/저흰 친구예요. We're friends.");

			if($.relationship=="friend"){
				m("'좋은 친구'...");
			}
			if($.relationship=="best friend"){
				m("절친한 친구..."); // 단짝 친구 라는 말을 쓰는 사람은 없겠지?
			}

			Threat_Tutor();

		}
	});
}

function Tutor_Matchmake(message){
	n(message);
	m("글쎄, 네가 그랬으면 좋겠다면/그걸 바란다면, 해줄[엮어줄] 수 있지! Well, if that's what you want, I could!");
	n("안돼애애.");
	m("Don't be shy! You're growing up to be a man.");
	m("그리고 엄마한테 손주들을 많이 [낳아줄거라고/남겨줄거라고]. And you're going to give me lots of grandkids.");

	Choose({
		"그만하세요! 아직 클레어를 만나보지도 않았다고요!": function(message){
			n(message);
			m("아직!");
			m("내일 올 거야!"); // she's coming over tomorrow!
			n("뭐라고요? 잭이랑 약속했는데--"); // What? But I promised Jack--
			m("I ironed your best clothes. You'll make a good first impression.");
			Threat_Tutor();
		},
		"그럴 확률은 50%예요. 전 바이거든요.The odds of that are 50-50, coz I'm bi.": function(message){

			$.admit_bisexuality = true;

			n(message);
			m("엄. 바이?..."); // Um.

			Show("nicky","dinner_nicky_defiant");

			n("네. 다른 말로 *바이섹슈얼*. Yes. As in BISEXUAL.");
			n("다른 말로 *남자랑 여자한테 둘 다 성적으로 끌린다고요*. As in I AM SEXUALLY ATTRACTED TO BOTH MEN AND WOMEN.");
			m(". . .");
			n(". . .");
			Threat_School();
		},
		"싫어요. 전 평생 애 갖고 싶지 않아요. No. I don't ever want to have kids.": function(message){
			n(message);
			m("크면 마음을 바꿀거야. You'll change your mind when you grow up.");
			m("아이를 키우는 건 wonderful. 네 아이들이 널 존경할거야! Raising a child is wonderful. Your children will look up to you!");
			n("...물론 그렇겠죠. 나르시시스트.");
			m("뭐라고?");
			n("아무것도 아니에요.");
			m(". . .");
			Threat_Tutor();
		}
	});
}

function Tutor_Forget(message){
	n(message);
	m("안돼. 이미 클레어랑 내일 오기로 약속 잡았거든. No, because I've already scheduled Claire to come over tomorrow.");
	n("뭐라고요?!");
	n("안돼요. 내일은 이미 잭이랑 공부하기로 약속했다고요. No. I promised to study with Jack tomorrow.");
	m(". . .");
	m("얼마나 오랫동안 걔네 집에 [있고 싶다고] 했지? How long did you want to stay over at his place?");

	Choose({
		"Overnight.": function(message){
			n(message);
			m(". . .");
			n(". . .");
			n("...Hello?");
			n("It's not weird. Friends have sleepovers all the time.");
			m(". . .");
			Threat_School();
		},
		"오후만이요. Just the afternoon.": function(message){
			n(message);
			if($.lying_about_hanging_out){
				m("I knew it. I caught your lie earlier.");
				n("Huh?");
			}else{
				m("...I knew it.");
			}
			m("You're just hanging out with him.");
			Threat_Tutor();
		},
		"한 시간 쯤이요. Maybe an hour or so.": function(message){
			n(message);
			m("That's not enough to really get studying done.");
			if($.lying_about_hanging_out){
				m("I knew it. I caught your lie earlier.");
				n("Huh?");
			}
			m("You're just hanging out with him.");
			Threat_Tutor();
		}
	});
}

function Threat_Tutor(){
	
	Show("nicky","dinner_nicky_defiant");
	
	n(". . .");
	m("Claire will be tutoring you every day after school, starting tomorrow.");

	Choose({
		"Every day?! What about my friends?!":function(message){
			n(message);
			m("Sweetie, I'm your friend!");
			n(". . .");
			m("Also Claire can be your friend. Maybe more than friends.");
			n(". . .");
			n("Are we done?");
			m("Just... one more thing.");
			Plot_Twist();
		},
		"Okay, but my weekends are free, right?": function(message){
			n(message);
			m("Yes.");
			n("Okay. Good that this is all settled now.");
			m("...Yes.");
			n(". . .");
			m("Just... one more thing.");
			Plot_Twist();
		},
		"What if just DON'T study with Claire?": function(message){
			n(message);
			m("Well, if you also want to hang out with her, that's good too.");
			m("Anything to make you more manly.");
			n("ugh.");
			m("Oh.");
			m("One more thing.");
			Plot_Twist();
		}
	});

}

function Threat_School(){

	$.changing_schools = true;
	
	m("You're changing schools."); // 전학가자

	Show("nicky","dinner_nicky_outrage");

	n("*뭐라고요?!*");
	m("잭뿐만이 아니야. 학교 전체 분위기가 악영향을 주는 것 같아. I think it's not just Jack, it's the entire school that's a bad influence on you.");
	n("*지금 장난하시는 거죠.*");
	m("이 캐나다 문화가 너를 너 자신에 대해서 헷갈리게 만들고 있잖니. tl awk. The whole Canadian culture is making you confused about who you are.");

	Show("nicky","dinner_nicky_defiant");

	Choose({
		"아니요, *엄마네* 아시아 문화가 보수적인 거예요. No, it's YOUR Asian culture that's backwards!": function(message){
			n(message);
			m("그렇게 무례하게 굴면 어떡하니!");
			m("<b>네</b> 문화이기도 하잖아! It's YOUR culture, too!");
			n(". . .");
			Plot_Twist();
		},
		"You can't do this to your CHILD!": function(message){
			n(message);
			m("그렇게 무례하게 굴면 어떡하니!");
			m("난 네 어머니인데, 널 내 맘대로 하는 건 내 [권리]야. / 난 네 *어머니야*. 난 너를 내 맘대로 할 자격이 있어. I'm your MOTHER, it's my right to do whatever I want with you!");
			n(". . .");
			Plot_Twist();
		},
		"상관없어요. *어느 학교든* 퀴어는 있어요.": function(message){ // Whatever. 소용없어요?
			n(message);
			m("그렇게 무례하게 굴면 어떡하니!");
			m("그리고 조심해, 마음 바꿔서 홈스쿨링할 수도 있어. And watch it, I could change my mind and start homeschooling you.");
			n(". . .");
			Plot_Twist();
		}
	});

}

function Plot_Twist(){

	m("Yesterday, when you were supposedly studying with Jack?");
	m("I know you secretly went off to watch a movie.");

	Show("nicky","dinner_nicky_sit");
	n(". . .");

	Show("clock_time","clock_1920");

	Choose({
		"Oh my god. You read my texts.": function(message){
			n(message);
			m("Yes. See how smart you can be when you're not with Jack?");
			Plot_Twist_2();
		},
		"No, we didn't. We studied.": function(message){
			n(message);
			m("You are a very stubborn boy.");
			m("I read your text messages.");
			Plot_Twist_2();
		},
		"What makes you think that?": function(message){
			n(message);
			m("Because I read your text messages.");
			Plot_Twist_2();
		}
	});

}

function Plot_Twist_2(){

	n(". . .");
	m("저녁 먹기 전에. 네 방에 있었어.");

	// Dinner_1
	m("아래층에서 네가 '"+$.what_you_called_out+"'라고 소리칠 동안, 나는 네 [폰]을 잠금해제하고... from downstairs, while I unlocked your phone...");
	m("너랑 잭이 서로 뭘 보냈는지 읽고 있었지. And read what you and Jack have been sending to each other.");
	m("난 네 어머니야. 그럴 자격이 있어. I'm your mother. I have the right.");

	n(". . .");

	if($.im_a_poet){
		m("이상한 시?");
	}
	if($.hippies){
		m("대마초 피는 얘기?");
	}
	if($.im_a_poet || $.hippies){
		m("네 어머니한테 거짓말하는 거 도와주기? Helping you lie to your own mother?");
		m("이것 말고 엄마 몰래 뭘 하고 있었던 거니? What else have you been doing behind my back?"); 
	}

	Choose({
		"이건 악몽이어야만 해. This has to be a bad dream.": function(message){
			n(message);
			m("그 영화 <디셉션>처럼?");
			n("제목... 제목 <인셉션>이에요. It's... it's 'Inception'.");
			m("말대꾸하지 마. Don't talk back to me.");
			Plot_Twist_3();
		},
		"잘못했어요. 정말 잘못했어요. / 죄송해요. 진짜 죄송해요. I'm sorry. I'm so sorry.": function(message){
			n(message);
			m("널 용서해. I forgive you.");
			m("You're my child, of course I forgive you.");
			Plot_Twist_3();
		},
		"I hate you.": function(message){
			n(message);
			m("That's okay.");
			m("I still love you, Nick.");
			Plot_Twist_3();
		},
	});

}

function Plot_Twist_3(){
	Start_Dinner_4();
}
