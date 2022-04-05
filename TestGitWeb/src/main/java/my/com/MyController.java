package my.com;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MyController {

	@RequestMapping("/testGit")
	public String testGit(){
		return "hello bye";
	}
	
}
