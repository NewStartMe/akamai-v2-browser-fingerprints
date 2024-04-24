package com.browser.browsermanage.demos.web;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;

/**
 * @ClassName RedisConfiguration
 * @Description TODO
 * @Author zsl
 * @Date 2024/3/6 15:13
 */
//@Configuration
public class RedisConfiguration {
    /**
     JSON 序列化器来对值进行序列化和反序列化
     */
    @Bean
    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory cf) {
        RedisTemplate<String, Object> rt= new RedisTemplate<>();
        rt.setConnectionFactory(cf);
        rt.setKeySerializer(new StringRedisSerializer());
        rt.setValueSerializer(new GenericJackson2JsonRedisSerializer());
        return rt;
    }
}
