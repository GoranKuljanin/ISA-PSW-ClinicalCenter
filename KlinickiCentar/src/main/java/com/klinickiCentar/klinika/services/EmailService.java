package com.klinickiCentar.klinika.services;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.klinickiCentar.klinika.models.User;

@Service
public class EmailService {
	
	@Autowired
	private JavaMailSender javaMailSender;
	
	@Autowired
	private Environment env;
	
	@Async
	public void sendNotification(User u) throws MailException, InterruptedException, MessagingException{
	
		String htmlView = "<html> <a href='http://localhost:4200/activateAccount/" + u.getId() + "'> Potvrdite link za aktivaciju naloga. </a> </html>";
		
		MimeMessage message = javaMailSender.createMimeMessage();
		
		MimeMessageHelper helper = new MimeMessageHelper(message, true);
		helper.setTo(u.getUsername());
		helper.setSubject("Klinicki Centar");
		helper.setText(htmlView, true);
		
		javaMailSender.send(message);
	}

}
