package com.dsi.Backend.twilio;

import com.twilio.rest.api.v2010.account.Message;
import com.twilio.rest.api.v2010.account.MessageCreator;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service("twilio")
public class SmsSender {
    private final TwilioConfig twilioConfig;
    @Value("${spring.application.receiver.phoneNumber}")
    String phoneNumber;

    @Autowired
    public SmsSender(TwilioConfig twilioConfig) {
        this.twilioConfig = twilioConfig;
    }

    public void send(String message){
        PhoneNumber to = new PhoneNumber(phoneNumber);
        PhoneNumber from = new PhoneNumber(twilioConfig.getTrialNumber());

        MessageCreator messageCreator = Message.creator(to, from, message);
        messageCreator.create();
    }
}
