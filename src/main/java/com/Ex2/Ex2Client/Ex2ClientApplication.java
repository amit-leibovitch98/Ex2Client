package com.Ex2.Ex2Client;

import com.Ex2.Ex2Client.services.WebClientService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Ex2ClientApplication {

	public static void main(String[] args) {
		SpringApplication.run(Ex2ClientApplication.class, args);
		System.out.print("Hello World!");
		WebClientService webClientService = new WebClientService();
		String res1 = webClientService.Question1();

		System.out.print(res1);
	}

}
