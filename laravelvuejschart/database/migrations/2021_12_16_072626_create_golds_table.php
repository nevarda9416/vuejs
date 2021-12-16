<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGoldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('golds', function (Blueprint $table) {
            $table->increments('id');
            $table->string('brand')->nullable();
            $table->string('company')->nullable();
            $table->integer('date');
            $table->integer('month');
            $table->integer('year');
            $table->integer('price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('golds');
    }
}
