class SessionsController < ApplicationController
  include SessionsHelper
  
  def create
    log_in
  end

  def logged_in
    check_if_logged_in
  end

  def logout
    log_out
  end

end
