package com.g5.grpc.util;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

public class GenerateAccount {

    private static final Random random = new Random();

    public static String generateCodCta() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyMMdd");
        String fecha = sdf.format(new Date());
        int numeroAleatorio = random.nextInt(10000);
        String codigoAleatorio = String.format("%04d", numeroAleatorio);

        return fecha + codigoAleatorio;
    }
}
